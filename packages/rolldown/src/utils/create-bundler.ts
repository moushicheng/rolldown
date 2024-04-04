import { Bundler } from '../binding'
import {
  normalizeInputOptions,
  type InputOptions,
} from '../options/input-options'
import { createInputOptionsAdapter } from '../options/input-options-adapter'
import {
  OutputOptions,
  normalizeOutputOptions,
} from '../options/output-options'

export async function createBundler(
  inputOptions: InputOptions,
  outputOptions: OutputOptions,
): Promise<Bundler> {
  // Convert `InputOptions` to `NormalizedInputOptions`.
  const normalizedInputOptions = await normalizeInputOptions(inputOptions) // MARK: 为什么这些处理不能放在rust里处理？感觉不合理。。。
  // Convert `NormalizedInputOptions` to `BindingInputOptions`
  const bindingInputOptions = createInputOptionsAdapter(
    normalizedInputOptions,
    inputOptions,
  )
  return new Bundler(bindingInputOptions, normalizeOutputOptions(outputOptions)) // MARK: 进入Rust的入口
}
